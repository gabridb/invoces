import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { validationSchema } from './validationSchema';

export default function FormModule({ handleButton }) {
  const initialFValues = {
    email: 'email de inicio',
    name: 'nombre de inicio',
    phone: 'teléfono de inicio',
    surname: 'data.surname',
    webAddress: 'web de inicio'
  };

  return (
    <Formik
      initialValues={initialFValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // When button submits form and form is in the process of submitting, submit button is disabled
        setSubmitting(true);
        // Simulate submitting to database, shows us values submitted, resets form
        handleButton(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {/* Callback function containing Formik state and helpers that handle common form actions */}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="name"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.name}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.name && errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="surname"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.surname}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.surname && errors.surname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.surname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="email"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.email}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.email && errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="phone"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.phone}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.phone && errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Web</Form.Label>
            <Form.Control
              type="text"
              name="webAddress" /* This name property is used to access the value of the form element via values.nameOfElement */
              onChange={handleChange} /* Set onChange to handleChange */
              onBlur={handleBlur} /* Set onBlur to handleBlur */
              value={
                values.web
              } /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              isInvalid={
                touched.webAddress && errors.webAddress
              } /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
            />
            <Form.Control.Feedback type="invalid">
              {errors.webAddress}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
