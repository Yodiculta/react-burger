import PropTypes from 'prop-types';

const productPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    __v: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string
  });

  export default productPropTypes;