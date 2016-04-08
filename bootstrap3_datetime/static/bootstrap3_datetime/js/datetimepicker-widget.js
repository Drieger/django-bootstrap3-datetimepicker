var datetimepickerWidgetCallback = function() {
    $("[data-datetimepicker='true']:has(input:not([readonly], [disabled]))").each(function(index, value) {
        $(this).datetimepicker($.parseJSON($(this).attr('data-datetimepicker-options')));
    });
};

$(document).ready(function() {
    callback();
    $(document).on('shown.bs.modal', callback);
});
