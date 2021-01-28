// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '../button';
// import Locale from '../../locale';
// import './type-form.scss';

// class TypeForm extends React.Component {
//   render() {
//     const locale = Locale.btn;

//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.total}
//           onChange={this.props.handleInput}
//         />
//         <div className="type-add">
//           <div className="type-add__items">
//             <div className="type-add__item">
//               <img src="#" alt="family" />
//               <input type="checkbox" id={this.props.id} />
//               <label htmlFor={this.props.id}>{this.props.category}</label>
//             </div>
//           </div>

//           <Button onClick={this.props.addType} label={locale.add} />
//         </div>
//       </div>
//     );
//   }
// }

// TypeForm.propTypes = {
//   category: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
// };

// export default TypeForm;
