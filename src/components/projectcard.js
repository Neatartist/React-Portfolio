import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={URL} target="_blank" rel="noopener noreferrer"> 
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 className='white-text'>{title}</h4>
            <span className='white-text'>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
