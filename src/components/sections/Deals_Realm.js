import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardHeader,
  
  } from "@material-ui/core";


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Deals_Realm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: ' ',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <Card>
      
        <div className={innerClasses}  >&nbsp;
        <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Metaverse.jpg')}
                      alt="Features tile icon 01"
                      width={1500}
                      height={1500}
                      paddingBottom={80}
                     />
                  </div> 
                  <div className={tilesClasses}style={{paddingTop:20}} >
                  <CardHeader
            avatar={ <Image
                src={require('./../../assets/images/R.jpg')}
                alt="Features tile icon 01"
                width={80}
                height={80} />}
         /> <h2>Realm Real Estate</h2>
          <SectionHeader data={sectionHeader} className="center-content"style={{paddingRight:400,paddingBottom:0,borderRadius:50}} />
          <p>Apparel that boosts your immune health,Cognition, recovery and sleep</p>
          </div>
          <div className={tilesClasses} >
         
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FDEDEC ",borderRadius:8,color:"red"}} wideMobile href="#0">
                    HEALTH & WELLNESS
                    </Button>
                    <Button tag="a" color="secondary" style={{backgroundColor:"#FDF2E9 ",borderRadius:8,color:"orange"}} wideMobile href="#0">
                    B2C
                    </Button>
                </ButtonGroup>
            
          </div>
        </div>
     
  
      
      </Card>
    </section>
  );
}

Deals_Realm.propTypes = propTypes;
Deals_Realm.defaultProps = defaultProps;

export default Deals_Realm;