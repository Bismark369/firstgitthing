const React = require('react');
const ReactDOM = require('react-dom');

const MyComponent = ({giginfo}) => {
  return (
    <div className="gig-container">
      {giginfo.map((element, index) => (
        <div className="gig-profile" key={index}>
          <img src={`/uploads/gigprofiles/${element.gigprofile}`} alt="Gig Profile"/>
        </div>
        <div className="gig-name">
          {element.gigname}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <MyComponent giginfo={giginfo} />,
  document.getElementById('root')
);
