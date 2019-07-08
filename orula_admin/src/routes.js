import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

// All pages routes
const RequestPool = React.lazy(() => import('./Demo/Applications/RequestPool/RequestPool'));
const DeliveryPool = React.lazy(() => import('./Demo/Applications/DeliveryPool/DeliveryPool'));
const ConfirmedDeliveries = React.lazy(() => import('./Demo/ConfirmedDeliveries/ConfirmedDeliveries'));
const Recoveries = React.lazy(() => import('./Demo/Recoveries/Recoveries'));
const VerifiedSenders = React.lazy(() => import('./Demo/VerifiedSenders/VerifiedSenders'));
const WithdrawRequests = React.lazy(() => import('./Demo/Disbursements/WIthdrawReq/WithdrawRequests'));
const Disbursed = React.lazy(() => import('./Demo/Disbursements/Disbursed/Disbursed'));
const Recovered = React.lazy(() => import('./Demo/Recovered/Recovered'));
const VendorVerifications = React.lazy(() => import('./Demo/Configurations/VendorVerifications'));
const UserSettings = React.lazy(() => import('./Demo/UserSettings/UserSettings'));


const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    // pages routing
    { path: '/applications/requestpool/request-pool', exact: true, name: 'Request Pool', component: RequestPool },
    { path: '/applications/deliverypool/delivery-pool', exact: true, name: 'Delivery Pool', component: DeliveryPool },
    { path: '/confirmeddeliveries/confirmed-deliveries', exact: true, name: 'Confirmed Deliveries', component: ConfirmedDeliveries },
    { path: '/recoveries/recoveries', exact: true, name: 'Recoveries', component: Recoveries },
    { path: '/verifiedsenders/verifiedsenders', exact: true, name: 'VerifiedSenders', component: VerifiedSenders },
    { path: '/Disbursements/WIthdrawReq/WithdrawRequests', exact: true, name: 'WithdrawRequests', component: WithdrawRequests },
    { path: '/Disbursements/Disbursed/Disbursed', exact: true, name: 'Disbursed', component: Disbursed },
    { path: '/Recovered/Recovered', exact: true, name: 'Recovered', component: Recovered },
    { path: '/Configurations/VendorVerifications', exact: true, name: 'VendorVerifications', component: VendorVerifications },
    { path: '/UserSettings/UserSettings', exact: true, name: 'UserSettings', component: UserSettings },

    

];

export default routes;