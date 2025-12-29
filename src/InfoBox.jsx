import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({Info}){
    const INIT_URL= "https://images.unsplash.com/photo-1635793902077-97d544d5c6b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9nZ3klMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const HOT_URL="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";




    return(
        <div className="InfoBox">
            <h1>Weather Info -{Info.Weather} </h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Info.humidity>80 ? RAIN_URL:
                        Info.temp >15 ? HOT_URL:COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {Info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                    <div>
                        <p>Temprature:{Info.temp}&deg;C</p>
                        <p>Humidity:{Info.humidity}</p>
                        <p>Min Temprature:{Info.tempMin}&deg;C</p>
                        <p>Max Temprature:{Info.tempMax}&deg;C</p>
                        <p>The wheather can be feel like:{Info.feelsLike}&deg;C</p>
                    </div>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
        
    );
}

