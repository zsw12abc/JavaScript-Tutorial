//给你一个字符串，寻找该字符串中出现次数最多的字母和出现次数
<script>
var str = "abaasdffggghhjjkkgfddsssss";
     var arr = new Array();
     var i = 0;
     while (str.charAt(0)) {
         arr[i] = str.charAt(0) + "=" + (str.split(str.charAt(0)).length - 1);
         str = str.split(str.charAt(0)).join("");
         i++;
     }
     alert(arr);
     for (var j = 0,temp=0; j < arr.length; j++) {
         if (temp <= Number(arr[j].split("=")[1])) {
             temp = Number(arr[j].split("=")[1]);
             i = j;
         }
     }
     alert(arr[i]);
</script>

//对["a","b","c"]进行全排序。
<script>  
/*
全排列（递归交换）算法  
1、将第一个位置分别放置各个不同的元素；  
2、对剩余的位置进行全排列（递归）；  
3、递归出口为只对一个元素进行全排列。  
*/ 
function swap(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}  
var count=0;  
function show(arr) {  
    document.write("P<sub>"+ ++count+"</sub>: "+arr+"<br />");  
}  
function perm(arr) {  
    (function fn(n) { //为第n个位置选择元素  
        for(var i=n;i<arr.length;i++) {  
            swap(arr,i,n);  
            if(n+1<arr.length-1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n+1); //从第n+1个下标进行全排列  
            else 
                show(arr); //显示一组结果  
            swap(arr,i,n);  
        }  
    })(0);  
}  
perm(["a","b","c"]);  
</script>

//去掉数组中重复的元素
<script>
Array.prototype.strip = function() {
         if (this.length < 2) {
             return [this[0]] || [];
         }
         var arr = [];
         for (var i = 0; i < this.length; i++) {
             arr.push(this.splice(i--, 1));
             for (var j = 0; j < this.length; j++) {
                 if (this[j] == arr[arr.length - 1]) {
                     this.splice(j--, 1);
                 }
             }
         }
         return arr;
     };
     var a = ["abc", "abc", "a", "b", "c", "a", "b", "c"];
     alert(a.strip());
</script>