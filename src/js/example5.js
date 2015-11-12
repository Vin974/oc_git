$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [
            { targets: 'nosort', orderable: false }
        ]
    });
});