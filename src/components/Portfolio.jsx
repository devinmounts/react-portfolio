import React from 'react'
import './../styles/Portfolio.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewsImg from './../assets/images/news-agg.png';
import AirBnB from './../assets/images/airbnb.png';
import Hair from './../assets/images/hair.png';

const Portfolio = props => {
  return(
    <div className='portfolio-style'>
      <header className='header'>
        Portfolio
      </header>
      <Card className='portfolio-card'>
        <CardActionArea>
          <CardMedia
            className='media'
            image={NewsImg}
            title="News Aggregator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Above the Fold
            </Typography>
            <Typography component="p">
              React and Redux: News Aggregation Application using News API
            </Typography>
          </CardContent>
        </CardActionArea>
          <CardActions>
            <a href='https://rocky-waters-37809.herokuapp.com/#/'><Button size="small" color="primary">
              Deployed Site
            </Button></a>
          <a href='https://github.com/devinmounts/news-agg'><Button size="small" color="primary">
              Git Hub Repo
            </Button></a>
          </CardActions>
        </Card>
        <Card className='portfolio-card'>
          <CardActionArea>
            <CardMedia
              className='media'
              image={AirBnB}
              title="Air Bnb Clone"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              AirBnB Clone
            </Typography>
            <Typography component="p">
              React:  AirBnB clone with search, filter and like features.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <a href='https://github.com/devinmounts/airbnb-clone'><Button size="small" color="primary">
            Git Hub Repo
          </Button></a>
        </CardActions>
      </Card>
      <Card className='portfolio-card'>
      <CardActionArea>
        <CardMedia
          className='media'
          image={Hair}
          title="Salon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hair Salon
          </Typography>
          <Typography component="p">
            C#: Relational databases with MySQL.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href='https://github.com/devinmounts/https://github.com/devinmounts/HairSalon.Solution'><Button size="small" color="primary">
          Git Hub Repo
        </Button></a>
      </CardActions>
    </Card>
    </div>
  );
}

export default Portfolio;
