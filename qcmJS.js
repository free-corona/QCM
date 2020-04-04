var questions = document.getElementsByTagName ( "div" );   //nselectioni les div(les questions kol) kol fi tab
document.getElementById ( "qcm" ).style.display = "none"

function StartTest () {
    document.getElementsByTagName ( "section" )[ 0 ].style.display = "none";
    document.getElementById ( "qcm" ).style.display = "block";
    for(let j=1;j<28;j++){questions[ j ].style.display = "none";}
}

var num = 0;

function prev () {
    questions[ ( num ) % 28 ].style.display = "none";
    questions[ ( num - 1 ) % 28 ].style.display = "block";
    num --;
}

function next () {
    if ( isNaN ( questions[ num ].querySelector ( "input:checked" ).value ) === false ) {
        questions[ ( num ) % 28 ].style.display = "none";
        questions[ ( num + 1 ) % 28 ].style.display = "block";
        num ++;
    }
    else {alert("أجب عن السؤال قبل المرور إلى الموالي !");}
}

function getValue () {
    var moy;
    for ( var i = 0 , moy = 0 ; i < questions.length ; i ++ ) {
        var questionValue = questions[ i ].querySelector ( "input:checked" ).value;//hekhou il value t3 il reponse
        moy = moy + parseFloat ( questionValue );
    }                  //n7ssb 9adech aandou min points
    var moyG = ( moy / 28 ) * 100;
    if ( moyG >= 50 ) {
        alert ( " نسبة إصابتك هي: " + moyG + "%\n" + "تواصل معنا على أرقام منطقتك المحددة\n" +
            "يبدو أنك في دائرة الناس المعرضين للخطورة المعينة. \n" +
            "لربما يجب عليك الاتصال بالخط الساخن الموجود في منطقتك للخضوع لفحص محدد .\n" +
            "إذا كنت تود الخروج من منزلك دع مسافة 2 متر بينك وبين الأشخاص المقابلين وحاول كبح السعال.حاول أن تبقى في المنزل وتجنب مخالطة الآخرين.\n" );
    } else {
        alert ( " نسبة إصابتك هي: " + moyG + "%\n" + "من فضلك ابق في المنزل\n" +
            "في الوقت الحالي أنت لست بحاجة لأي مساعدة طبية:\n" +
            "من فضلك قم باحتياطاتك المعتادة\n" );
    }
}
