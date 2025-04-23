import { default_view, List } from '@servicenow/sdk/core'

export default List({
    $id: 'b180c5da934da6500ac47a5efaba10f5',
    view: default_view,
    table: 'x_692302_pf_manage_pf_users',
    columns: [
        'number',
        'name',
        'active',
        'activity_due',
        'additional_assignee_list',
        'approval',
        'approval_history',
        'approval_set',
        'assigned_to',
        'assignment_group',
    ],
})
