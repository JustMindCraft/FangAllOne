import {HomeBanner} from '../../models/';


export default[
    {
        method: 'GET',
        path: '/home_banner/',
        handler: async (request, h) => {
            try{
                const imgs = await HomeBanner.find()
                return h.response(imgs).code(200);
            }catch (error) {
                console.error(error.message.body);
                
                return h.response(error).code(203);
            }
        }
    }
]