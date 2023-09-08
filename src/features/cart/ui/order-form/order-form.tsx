import {Button, TextField} from "@mui/material";
import {ChangeEvent, FormEvent, useState} from "react";
import {setToLocalStorage} from "../../../../common/utils/utils.ts";
import {useAppSelector} from "../../../../app/hooks/hooks.ts";
import {getProductsInCart} from "../../model/cart-selectors.ts";

export type FormStateType = {
    name: string
    surName: string
    address: string
    phone: string
}

export type FormErrorType = {
    name: boolean
    surName: boolean
    address: boolean
    phone: boolean
}

type FormKeysType = keyof FormStateType;

export const OrderForm = () => {
    const products = useAppSelector(getProductsInCart);
    const [values, setValues] = useState<FormStateType>({
        name: '',
        surName: '',
        address: '',
        phone: ''
    });
    const [errors, setErrors] = useState<FormErrorType>({
        name: false,
        surName: false,
        address: false,
        phone: false
    });

    const handleChange = (fieldName: FormKeysType) => (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValues({...values, [fieldName]: newValue});
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setToLocalStorage({products, userData: values})

        setValues({
            name: '',
            surName: '',
            address: '',
            phone: ''
        });
    };


    return (
        <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
            <TextField
                sx={{marginBottom: '20px'}}
                label="Name"
                placeholder={'Name'}
                name="name"
                value={values.name}
                onChange={handleChange('name')}
                fullWidth
                error={errors.name}
                helperText="Incorrect entry."
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Surname"
                placeholder={'Surname'}
                name="surname"
                value={values.surName}
                onChange={handleChange('surName')}
                fullWidth
                error={errors.surName}
                helperText="Incorrect entry."
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Address"
                placeholder={'Address'}
                name="address"
                value={values.address}
                onChange={handleChange('address')}
                fullWidth
                error={errors.address}
                helperText="Incorrect entry."
            />
            <TextField
                sx={{marginBottom: '20px'}}
                label="Phone"
                placeholder={'Phone'}
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
                fullWidth
                error={errors.phone}
                helperText="Incorrect entry."
            />
            <Button type="submit" variant="contained" color="primary">
                Order
            </Button>
        </form>
    );
}