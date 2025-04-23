import { default_view, List } from '@servicenow/sdk/core'

export default List({
    $id: '2b408d5a934da6500ac47a5efaba100e',
    view: default_view,
    table: 'x_692302_pf_manage_pf_nomination_details',
    columns: [
        'number',
        'active',
        'activity_due',
        'additional_assignee_list',
        'approval',
        'approval_history',
        'approval_set',
        'assigned_to',
        'assignment_group',
        'business_duration',
    ],
})
