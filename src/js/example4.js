$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [
            { targets: 1, orderable: false },
            { targets: 5, orderable: false }
        ]
    });
});