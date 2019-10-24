import { connect } from "react-redux";
import RegisterPackage from '../../components/warehouse/register-package.js';
import PackageResource from '../../api/PackageResource.js';

const mapDispatchToProps = dispatch => ({
    registerPackage: newPackage =>
    PackageResource.createPackage(newPackage)
      .then(res => res.json())
      .then(
        res => 
      dispatch({
        type: "REGISTER_PACKAGE",
        payload: newPackage
      }))
});


export default connect(
    null,
    mapDispatchToProps
  )(RegisterPackage);  