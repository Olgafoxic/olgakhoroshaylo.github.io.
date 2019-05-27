var s3=document.getElementById("id3");
var s2=document.getElementById("id2");
var s1=document.getElementById("id1");
var s0=document.getElementById("id0");
function DateSortOld() {
  s3.outerHTML=s0.innerHTML;
  s2.outerHTML=s1.innerHTML;
  s1.outerHTML=s2.innerHTML;
  s0.outerHTML=s3.innerHTML;
}
function DateSortNew() {
   window.location.reload();
}
function DateSortOld1() {
  s1.outerHTML=s0.innerHTML;
  s0.outerHTML=s1.innerHTML;
}
