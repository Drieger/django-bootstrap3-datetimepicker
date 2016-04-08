var datetimepickerWidgetCallback = function() {
    $("[data-datetimepicker='true']:has(input:not([readonly], [disabled]))").each(function(index, value) {
        $(this).datetimepicker($.parseJSON($(this).attr('data-datetimepicker-options')));
    });
};

window.onload = function() {
  $(document).ready(function() {
      datetimepickerWidgetCallback();
      $(document).on('shown.bs.modal', datetimepickerWidgetCallback);
});}
