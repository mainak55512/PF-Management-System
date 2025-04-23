import { StringColumn, SystemClassNameColumn, Table } from '@servicenow/sdk/core'

export const x_692302_pf_manage_pf_nominations = Table({
    name: 'x_692302_pf_manage_pf_nominations',
    label: 'PF Nominations',
    allow_web_service_access: false,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: true,
    accessible_from: 'public',
    actions: ['read', 'update', 'create'],
    schema: {
        nominee_name: StringColumn({
            label: 'Nominee Name',
            maxLength: 40,
        }),
        sys_class_name: SystemClassNameColumn({
            label: 'Class',
            maxLength: 80,
            default: 'javascript:current.getTableName();',
        }),
        number: StringColumn({
            label: 'Nomination ID',
            read_only: true,
            attributes: {
                ignore_filter_on_new: true,
            },
            maxLength: 40,
            default: 'javascript:global.getNextObjNumberPadded();',
        }),
    },
    index: [{ name: 'index', element: ['sys_class_name'], unique: false }],
})
