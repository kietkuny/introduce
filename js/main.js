$(window).on('scroll', function() {
  let header = $('header');
  if ($(this).scrollTop() > 0) {
      header.addClass('bg-body-tertiary border-bottom border-dark ');
  } else {
      header.removeClass('bg-body-tertiary border-bottom border-dark');
  }
});
$(`.hamburger-menu`).on("click", function () {
  $(`.hamburger-menu`).toggleClass('change');
  $(`.menu-header`).toggleClass('menu-header-close');
})

$("#copyMomo").click(function(){
  // Lấy nội dung từ thẻ p
  let text = $("#sdtmomo").text();

  // Tạo một phần tử input tạm thời để sao chép
  let tempInput = $("<input>");
  $("main").append(tempInput);
  tempInput.val(text).select();
  
  // Thực hiện lệnh sao chép
  document.execCommand("copy");
  
  // Xóa phần tử input tạm thời
  tempInput.remove();

  // Hiển thị nội dung đã sao chép trong modal
  $("#copiedMomo").text(text);
  $("#copyModalMomo").modal('show');
});
$("#copyVietcom").click(function(){
  // Lấy nội dung từ thẻ p
  let text = $("#stkvietcom").text();

  // Tạo một phần tử input tạm thời để sao chép
  let tempInput = $("<input>");
  $("main").append(tempInput);
  tempInput.val(text).select();
  
  // Thực hiện lệnh sao chép
  document.execCommand("copy");
  
  // Xóa phần tử input tạm thời
  tempInput.remove();

  // Hiển thị nội dung đã sao chép trong modal
  $("#copiedVietcom").text(text);
  $("#copyModalVietcom").modal('show');
});
// $(window).on('load', function(){
//   $('.banner-content-left').slick({
//     dots: false,
//     arrows: false,
//     fade: true,
//     autoplay: true,
//     pauseOnFocus: false,
//     loop: true,
//     autoplaySpeed: 2000,
//   });
// })

		