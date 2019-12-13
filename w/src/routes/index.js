import{
    Index,
    Details
} from '../pages/index'
// console.log(Details)

export const mainRoutes=[{
    pathname:'/index',
    component:Index
}
,{
    pathname:'/details/:id',
    component:Details
}
]