var typed = new Typed('#element', {
    strings: ['Web Designer', 'Graphic Designer', 'UI/UX Developer.'],
    typeSpeed: 50,
  });

  $(document).ready(function() {
    // Footer height fix
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('margin-top', -footerHeight);
  });