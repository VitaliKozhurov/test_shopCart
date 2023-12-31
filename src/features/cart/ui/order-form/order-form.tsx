import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks/hooks.ts";
import {cartActions} from "../../model/cart-slice.ts";
import {setToLocalStorage} from "../../../../common/utils/utils.ts";
import {getProductsInCart, getUserState} from "../../model/cart-selectors.ts";

export const OrderForm = () => {
    const order = useAppSelector(getProductsInCart)
    const userState = useAppSelector(getUserState)
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: userState,
        validationSchema: Yup.object({
            name: Yup.string().required('This field is required'),
            surName: Yup.string().required('This field is required'),
            address: Yup.string().required('This field is required'),
            phone: Yup.string().required('This field is required')
        }),
        validateOnBlur: false,
        onSubmit: values => {
            dispatch(cartActions.addUserInfo(values));
            const stateObj = {products: [], cart: {order, user: values}}
            setToLocalStorage(stateObj)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} style={{textAlign: 'center'}}>
            <TextField
                sx={{marginBottom: '20px'}}
                label="Name"
                placeholder={'Name'}
                fullWidth
                {...formik.getFieldProps('name')}
                error={!!formik.errors.name}
                helperText={!!formik.errors.name && formik.errors.name}
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Surname"
                placeholder={'Surname'}
                fullWidth
                {...formik.getFieldProps('surName')}
                error={!!formik.errors.surName}
                helperText={!!formik.errors.surName && formik.errors.surName}
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Address"
                placeholder={'Address'}
                fullWidth
                {...formik.getFieldProps('address')}
                error={!!formik.errors.address}
                helperText={!!formik.errors.address && formik.errors.address}
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Phone"
                placeholder={'Phone'}
                fullWidth
                {...formik.getFieldProps('phone')}
                error={!!formik.errors.phone}
                helperText={!!formik.errors.phone && formik.errors.phone}
            />
            <Button type="submit" variant="contained" color="primary" disabled={!!Object.keys(formik.errors).length}>
                Order
            </Button>
        </form>
    );
}