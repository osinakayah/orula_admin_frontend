export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        // {
        //     id: 'ui-element',
        //     title: 'UI ELEMENT',
        //     type: 'group',
        //     icon: 'icon-ui',
        //     children: [
        //         {
        //             id: 'basic',
        //             title: 'Component',
        //             type: 'collapse',
        //             icon: 'feather icon-box',
        //             children: [
        //                 {
        //                     id: 'button',
        //                     title: 'Button',
        //                     type: 'item',
        //                     url: '/basic/button'
        //                 },
        //                 {
        //                     id: 'badges',
        //                     title: 'Badges',
        //                     type: 'item',
        //                     url: '/basic/badges'
        //                 },
        //                 {
        //                     id: 'breadcrumb-pagination',
        //                     title: 'Breadcrumb & Pagination',
        //                     type: 'item',
        //                     url: '/basic/breadcrumb-paging'
        //                 },
        //                 {
        //                     id: 'collapse',
        //                     title: 'Collapse',
        //                     type: 'item',
        //                     url: '/basic/collapse'
        //                 },
        //                 {
        //                     id: 'tabs-pills',
        //                     title: 'Tabs & Pills',
        //                     type: 'item',
        //                     url: '/basic/tabs-pills'
        //                 },
        //                 {
        //                     id: 'typography',
        //                     title: 'Typography',
        //                     type: 'item',
        //                     url: '/basic/typography'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        {
            id: 'senders Section',
            title: 'Senders Section',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'application',
                    title: 'Applications',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'requestpool',
                            title: 'Request Pool',
                            type: 'item',
                            url: '/applications/requestpool/request-pool',
                            badge: {
                                title: '3',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'deliverypool',
                            title: 'Delivery Pool',
                            type: 'item',
                            url: '/applications/deliverypool/delivery-pool',
                            badge: {
                                title: '1',
                                type: 'label-danger'
                            }
                        },
                        // {
                        //     id: 'breadcrumb-pagination',
                        //     title: 'Breadcrumb & Pagination',
                        //     type: 'item',
                        //     url: '/basic/breadcrumb-paging'
                        // },
                        // {
                        //     id: 'collapse',
                        //     title: 'Collapse',
                        //     type: 'item',
                        //     url: '/basic/collapse'
                        // },
                        // {
                        //     id: 'tabs-pills',
                        //     title: 'Tabs & Pills',
                        //     type: 'item',
                        //     url: '/basic/tabs-pills'
                        // },
                        // {
                        //     id: 'typography',
                        //     title: 'Typography',
                        //     type: 'item',
                        //     url: '/basic/typography'
                        // }
                    ]
                },
                {
                    id: 'recoveries',
                    title: 'Recoveries',
                    type: 'item',
                    icon: 'feather icon-zap',
                    url: '/recoveries/recoveries'
                },
                {
                    id: 'verifiedsenders',
                    title: 'Verified Senders',
                    type: 'item',
                    icon: 'feather icon-user-check',
                    url: '/verifiedsenders/verifiedsenders'
                }
            ]
        },
        // {
        //     id: 'ui-forms',
        //     title: 'Forms & Tables',
        //     type: 'group',
        //     icon: 'icon-group',
        //     children: [
        //         {
        //             id: 'form-basic',
        //             title: 'Form Elements',
        //             type: 'item',
        //             url: '/forms/form-basic',
        //             icon: 'feather icon-file-text'
        //         },
        //         {
        //             id: 'bootstrap',
        //             title: 'Table',
        //             type: 'item',
        //             icon: 'feather icon-server',
        //             url: '/tables/bootstrap'
        //         }
        //     ]
        // },
        {
            id: 'Dispatchers-section',
            title: 'Dispatcher\'s Section',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'confirmeddeliveries',
                    title: 'Confirmed Deliveries',
                    type: 'item',
                    icon: 'feather icon-check-circle',
                    url: '/confirmeddeliveries/confirmed-deliveries'
                },
                {
                    id: 'disbursements',
                    title: 'Disbursements',
                    type: 'collapse',
                    icon: 'feather icon-trending-up',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'waithdraw-request',
                            title: 'Withdraw Requests',
                            type: 'item',
                            url: '/Disbursements/WIthdrawReq/WithdrawRequests',
                            badge: {
                                title: '3',
                                type: 'label-danger'
                            }
                        },
                        {
                            id: 'disbursed',
                            title: 'Disbursed',
                            type: 'item',
                            url: '/Disbursements/Disbursed/Disbursed',
                        }
                    ]
                    
                },
                {
                    id: 'verified-Dispatchers',
                    title: 'Verified Dispatchers',
                    type: 'item',
                    icon: 'feather icon-user-check',
                    url: '/verifiedDispatchers/verifiedDispatchers'
                },
            ]
        },
        // {
        //     id: 'chart-maps',
        //     title: 'Chart & Maps',
        //     type: 'group',
        //     icon: 'icon-charts',
        //     children: [
        //         {
        //             id: 'charts',
        //             title: 'Charts',
        //             type: 'item',
        //             icon: 'feather icon-pie-chart',
        //             url: '/charts/nvd3'
        //         },
        //         {
        //             id: 'maps',
        //             title: 'Map',
        //             type: 'item',
        //             icon: 'feather icon-map',
        //             url: '/maps/google-map'
        //         }
        //     ]
        // },
        {
            id: 'chart-maps',
            title: 'Configurations',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'configurations',
                    title: 'Dispatcher Verification',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/Configurations/DispatcherVerifications'
                },
                // {
                //     id: 'maps',
                //     title: 'Map',
                //     type: 'item',
                //     icon: 'feather icon-map',
                //     url: '/maps/google-map'
                // }
            ]
        },
        {
            id: 'setup',
            title: 'Setup',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    // badge: {
                    //     title: 'New',
                    //     type: 'label-danger'
                    // },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'User Settings',
                    type: 'item',
                    url: '/UserSettings/UserSettings',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'Documentation',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                // {
                //     id: 'menu-level',
                //     title: 'Menu Levels',
                //     type: 'collapse',
                //     icon: 'feather icon-menu',
                //     children: [
                //         {
                //             id: 'menu-level-1.1',
                //             title: 'Menu Level 1.1',
                //             type: 'item',
                //             url: '#!',
                //         },
                //         {
                //             id: 'menu-level-1.2',
                //             title: 'Menu Level 2.2',
                //             type: 'collapse',
                //             children: [
                //                 {
                //                     id: 'menu-level-2.1',
                //                     title: 'Menu Level 2.1',
                //                     type: 'item',
                //                     url: '#',
                //                 },
                //                 {
                //                     id: 'menu-level-2.2',
                //                     title: 'Menu Level 2.2',
                //                     type: 'collapse',
                //                     children: [
                //                         {
                //                             id: 'menu-level-3.1',
                //                             title: 'Menu Level 3.1',
                //                             type: 'item',
                //                             url: '#',
                //                         },
                //                         {
                //                             id: 'menu-level-3.2',
                //                             title: 'Menu Level 3.2',
                //                             type: 'item',
                //                             url: '#',
                //                         }
                //                     ]
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     id: 'disabled-menu',
                //     title: 'Disabled Menu',
                //     type: 'item',
                //     url: '#',
                //     classes: 'nav-item disabled',
                //     icon: 'feather icon-power'
                // },
                /*{
                    id: 'buy-now',
                    title: 'Buy Now',
                    type: 'item',
                    icon: 'feather icon-user',
                    classes: 'nav-item',
                    url: 'https://codedthemes.com',
                    target: true,
                    external: true,
                    badge: {
                        title: 'v1.0',
                        type: 'label-primary'
                    }
                }*/
            ]
        }
    ]
}