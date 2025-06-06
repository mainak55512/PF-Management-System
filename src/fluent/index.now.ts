import '@servicenow/sdk/global'
import {
    BooleanColumn,
    BusinessRule,
    ClientScript,
    /*IntegerColumn,*/ ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'
import { showStateUpdate } from '../server/script.js'

//creates a client script that pops up 'Table loaded successfully!!' message every time todo record is loaded
ClientScript({
    $id: Now.ID['cs0'],
    name: 'my_client_script',
    table: 'x_692302_pf_manage_pf_users',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Custom client script generated by Now SDK',
    messages: '',
    isolate_script: false,
    type: 'onSubmit',
    script: script`function onSubmit() {
        let uan = g_form.getValue('u_uan');
        g_form.addInfoMessage("UAN>>"+uan);
        if (uan.length < 12) {
            return false;
        }
        // g_form.setValue('u_uan', "UAN"+uan);
    }`,
})

//creates a business rule that pops up state change message whenever a todo record is updated
// test comment
BusinessRule({
    $id: Now.ID['br0'],
    action: ['insert'],
    table: 'x_692302_pf_manage_pf_users',
    script: showStateUpdate,
    name: 'LogStateChange',
    order: 100,
    when: 'before',
    active: true,
    abort_action: false,
})

export const x_692302_pf_manage_pf_users = Table({
    name: 'x_692302_pf_manage_pf_users',
    label: 'PF User',
    extends: 'task',
    auto_number: {
        prefix: 'PFUSR',
        number: 1000,
        number_of_digits: 9,
    },
    schema: {
        u_pf_user_name: ReferenceColumn({
            label: 'Name',
            attributes: {},
            maxLength: 32,
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        u_pf_account: StringColumn({
            label: 'PF Account',
            mandatory: true,
            maxLength: 40,
        }),
        u_uan: StringColumn({
            label: 'UAN Number',
            mandatory: true,
            maxLength: 40,
        }),
        name: StringColumn({
            label: 'XNAME',
            maxLength: 40,
        }),
        u_pension_member: BooleanColumn({
            label: 'Pension Scheme Member',
            maxLength: 40,
        }),
    },
    actions: ['read', 'update', 'create'],
})

export const x_692302_pf_manage_pf_nomination_details = Table({
    name: 'x_692302_pf_manage_pf_nomination_details',
    label: 'PF Nomination Details',
    extends: 'task',
    auto_number: {
        prefix: 'PFNOMM',
        number: 1000,
        number_of_digits: 9,
    },
    schema: {
        u_nominee_name: StringColumn({
            label: 'Nominee',
            mandatory: true,
            maxLength: 40,
        }),
        u_uan: StringColumn({
            label: 'UAN Number',
            mandatory: true,
            maxLength: 40,
        }),
        u_nomination_date: StringColumn({
            label: 'Nomination date',
            mandatory: true,
            maxLength: 40,
        }),
        u_nomination_percent: StringColumn({
            label: 'Nomination Percentage',
            mandatory: true,
            maxLength: 40,
        }),
        u_pf_member_id: ReferenceColumn({
            label: 'Member ID',
            attributes: {},
            maxLength: 32,
            referenceTable: 'x_692302_pf_manage_pf_users',
            mandatory: true,
        }),
    },
    actions: ['read', 'update', 'create'],
})
