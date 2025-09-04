# -*- coding: utf-8 -*-
{
    'name': 'partner sale order count widget',
    'version': '1.0',
    'summary': 'Shows total sale order for a customer using an OWL field widget',
    'description': """
        Add a custom OWL 2 widget on res.partner form view to display  number to related Sale Order Count
    """,
    'author': 'SME Intellect Co. Ltd',
    'website': 'https://www.smeintellect.com/',
    'category': 'Sales',
    'depends': ['base','sale','web','contacts'],
    'data': [
        'views/res_partner_view.xml',
    ],
    'assets': {
        'web.assets_backend': [
            '/custom_partner_widget/static/src/js/sale_order_counter_widget.js',
            'custom_partner_widget/static/src/xml/sale_order_conter_widget.xml'
        ],
    },
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
}