import {HomeBanner} from '../../models/';


export default[
    {
        method: 'GET',
        path: '/home_banner/{key}',
        handler: async (request, h) => {
            const { key } = request.params;
            try{
                const imgs = await HomeBanner.findOne({id:key})
                return h.response(imgs).code(200);
            }catch (error) {
                console.error(error.message.body);
                
                return h.response(error).code(203);
            }
        }
    }
]