
import PropTypes from 'prop-types';
import { FaCheck } from "react-icons/fa6";



const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex item-center'><FaCheck className='text-green-200 mr-2'/>{feature}
            </p>
        </div>
    );
};

Feature.propTypes={
    option:PropTypes.object}

export default Feature;