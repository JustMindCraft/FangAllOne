import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const ProductCard = (props: any) => {
    const { name, description, cover } = props;
    return (
        <Card style={{
            maxWidth: 345,
            margin: "2px",
            width: "46%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: "space-around"
        }}>
            <CardActionArea>
                <CardMedia style={{
                    minHeight: 140,
                    height: "60%"
                }}
                image={cover}
                title={name}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    {name}
                </Typography>
                <Typography  gutterBottom variant="subtitle1" component="h5">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                购买
                </Button>
                <Button size="small" color="primary">
                了解
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;