$(document).ready(function() {
  var e = $(".sidebar-inner");

  function t() {
    var t, i, a = $(".header-inner").height() + CONFIG.sidebar.offset,
      f = (t = $(".footer-inner"), i = t.outerHeight(!0) - t.outerHeight(), t.outerHeight(!0) + i);
    a + ($("#sidebar").height() + NexT.utils.getSidebarb2tHeight()) < $("#content").height() && e.affix({
        offset: {
          top: a - CONFIG.sidebar.offset,
          bottom: f
        }
      }),
      function(e) {
        return $("#sidebar").css({
          "margin-top": e
        })
      }(a).css({
        "margin-left": "initial"
      })
  }
  t(), window.matchMedia("(min-width: 991px)").addListener(function(i) {
    i.matches && ($(window).off(".affix"), e.removeData("bs.affix").removeClass("affix affix-top affix-bottom"), t())
  })
});