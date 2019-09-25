window.onload=function () {

    waterfall('main','box');

    var dataInt={"data":[
        {"src":'0.jpeg'},
            {"src":"1.jpeg"},
            {"src":"2.jpeg"},
            {"src":"3.jpeg"},
            {"src":"4.jpeg"},
            {"src":"5.jpeg"},
            {"src":"6.jpeg"},
            {"src":"7.jpeg"},
            {"src":"8.jpeg"},
            {"src":"9.jpeg"},
            {"src":"10.jpeg"},
            {"src":"11.jpeg"},
            {"src":"12.jpeg"},
            {"src":"13.jpeg"},
            {"src":"14.jpeg"},
            {"src":"15.jpeg"},
            {"src":"16.jpeg"},
            {"src":"17.jpeg"},
            {"src":"18.jpeg"},
            {"src":"19.jpeg"},
            {"src":"20.jpeg"},
            {"src":"21.jpeg"},
            {"src":"22.jpeg"},
            {"src":"23.jpeg"},
            {"src":"24.jpeg"},
            {"src":"25.jpeg"},
            {"src":"26.jpeg"},
            {"src":"27.jpeg"},
            {"src":"28.jpeg"},
            {"src":"29.jpeg"},
            {"src":"30.jpeg"},
            {"src":"31.jpeg"},
            {"src":"32.jpeg"},
            {"src":"33.jpeg"},
            {"src":"34.jpeg"},
            {"src":"35.jpeg"},
            {"src":"36.jpeg"},

        ]};

    window.onscroll=function () {

        if (checkScrollSlide){


            var oParent=document.getElementById('main');


            for (var i=0;i<dataInt.data.length;i++){

                var oBox=document.createElement('div');

                oBox.className='box';
                oParent.appendChild(oBox);

                var oPic =document.createElement('div');
                oPic.className='pic';
                oBox.appendChild(oPic);

                var oImg =document.createElement('img');
                oImg.src="images/"+dataInt.data[i].src;
                oPic.appendChild(oImg);



            }
            waterfall('main','box');

        }

        checkScrollSlide();
    }

};

function waterfall(parent,box) {

    //讲main下所有的class为box的元素取出来

    var oParent =document.getElementById(parent);

    var oBoxs = getByClass(oParent,box);
   //计算整个页面显示的列数(页面宽/box的宽度)

    var oBoxW =oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置main的宽度
    oParent.style.cssText='width:'+oBoxW*cols+'px; margin: 0 auto';
//存放每一列高度的数组
    var hArr=[];

    for (var i=0;i<oBoxs.length;i++){

        if (i<cols){

            hArr.push(oBoxs[i].offsetHeight);
        }
        else {

            var minH=Math.min.apply(null,hArr);

            var index=  getMinhIndex(hArr,minH);

            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            oBoxs[i].style.left=oBoxW*index+'px';
            hArr[index]+=oBoxs[i].offsetHeight;

        }
    }
    console.log(hArr);
}

function getByClass(parent,clsName) {
//用来存储获取到的所有class为box的元素
    var boxArr =new Array(),

        oElements =parent.getElementsByTagName('*');
    for (i=0;i<oElements.length;i++){

        if (oElements[i].className==clsName){

            boxArr.push(oElements[i]);
        }

    }


    return boxArr;
}

function getMinhIndex(arr,val) {

    for (var i in arr){

        if (arr[i]==val){

            return i;
        }

    }

}


//检测是否具备了加载数据块的条件
function checkScrollSlide() {

    var oParent =document.getElementById('main');

    var oBoxs =getByClass(oParent,'box');

    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);

    var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;

   var height =document.body.clientHeight || document.documentElement.clientHeight;

  return (lastBoxH<scrollTop+height)?true:false;

}