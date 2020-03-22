$(function() {
    $('input[name="dates"]').daterangepicker({
        autoUpdateInput: false,
        parentEl:'#input-dates',
        opens: 'left',
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM-DD-YY') + ' > ' + picker.endDate.format('MM-DD-YY'));
    });
    $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  });