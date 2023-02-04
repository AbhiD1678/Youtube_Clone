import { Link } from "react-router-dom"
import { Typography,Card,
    CardContent,CardMedia } 
    from "@mui/material";
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,
    demoChannelTitle,demoChannelUrl } 
from "../utils/constant";
import { Check, CheckCircle } from "@mui/icons-material";

const VideoCard = ({video:{id:{videoId},snippet}}) =>(
    <Card sx={{width:{xs:'100%',sm:358,md:320},
    boxShadow:'none',

    borderRadius:'none'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{
                xs:'100%',
                sm:'358px',
                md:'320px'

            },height:180}}
            
            
            />
        </Link>
        <CardContent 
        sx={{backgroundColor :'#1e1e1e',
        height:'106px'}}
        >
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant="subtitle1" 
                fontWeight='bold'
          
                backgroundColor='#1e1e1e'
                color='#FFF'>
                    {snippet?.title.slice(0,100) || 
                    demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
        <Link to={snippet?.channelId ? 
            `/channel/${snippet?.channelId}`: demoChannelUrl}>
            <Typography variant="subtitle2" 
            fontWeight='bold'
            backgroundColor='#1e1e1e'
            color='gray'>
                {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,
            color:'gray',
            ml:'5'}} />
            </Typography>
        </Link>
        </CardContent>
    </Card>
  )


export default VideoCard