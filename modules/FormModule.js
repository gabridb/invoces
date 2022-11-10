import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { validationSchema } from './validationSchema';

export default function FormModule({ handleButton }) {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep(step+1);
  const handlePrevious = () => setStep(step-1);

  const initialFValues = {
    fromName: '',
    fromAddress: '',
    fromEmail: '',
    fromPhone: '',
    toName: '',
    toAddress: '',
    toEmail: '',
    toPhone: '',
    invoiceNumber: '',
    invoiceDate: '',
    invoicePO: '',
    invoiceDue: '',
    itemId: '',
    itemDescription: '',
    itemQuantity: '', 
    itemAmount: '',
    subtotal: '',
    taxRate: '',
    tax: '',
    total: '',
    paymentOptions: '',
    terms: ''
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
          //FROM
          <div className={step === 1 ? "d-inline" : "d-none"}>
            <Form.Group controlId="fromName" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="fromName"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.fromName}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.fromName && errors.fromName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fromName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="fromAddress"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.fromAddress}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.fromAddress && errors.fromAddress}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fromAddress}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="fromEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="fromEmail"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.fromEmail}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.fromEmail && errors.fromEmail}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fromEmail}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="fromPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="fromPhone"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.fromPhone}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.fromPhone && errors.fromPhone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fromPhone}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="link" type="submit" disabled={isSubmitting} onClick={handlePrevious} className="ml-4">
            Back
            </Button>
            {' '}
            <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleNext}>
              Next - {step}
            </Button>
          </div>
          //TO
          <div className={step === 2 ? "d-inline" : "d-none"}>
            <Form.Group controlId="toName" className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="toName"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.toName}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.toName && errors.toName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.toName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="toAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="toAddress"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.toAddress}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.toAddress && errors.toAddress}
              />
              <Form.Control.Feedback type="invalid">
                {errors.toAddress}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="toEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="toEmail"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.toEmail}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.toEmail && errors.toEmail}
              />
              <Form.Control.Feedback type="invalid">
                {errors.toEmail}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="toPhone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="toPhone"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.toPhone}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.toPhone && errors.toPhone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.toPhone}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="link" type="submit" disabled={isSubmitting} onClick={handlePrevious} className="ml-4">
            Back
            </Button>
            {' '}
            <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleNext}>
              Next - {step}
            </Button>
          </div>

          //INVOICE
          <div className={step === 2 ? "d-inline" : "d-none"}>
            <Form.Group controlId="invoiceNumber" className="mb-3">
              <Form.Label>Invoice Number</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="invoiceNumber"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.invoiceNumber}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.invoiceNumber && errors.invoiceNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.invoiceNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="invoiceDate" className="mb-3">
              <Form.Label>invoice Date</Form.Label>
              <Form.Control
                type="date"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="invoiceDate"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.invoiceDate}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.invoiceDate && errors.invoiceDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.invoiceDate}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="invoicePO" className="mb-3">
              <Form.Label>P.O.</Form.Label>
              <Form.Control
                type="text"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="invoicePO"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.invoicePO}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.invoicePO && errors.invoicePO}
              />
              <Form.Control.Feedback type="invalid">
                {errors.invoicePO}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="invoiceDue" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                /* This name property is used to access the value of the form element via values.nameOfElement */
                name="invoiceDue"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.invoiceDue}
                /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
                isInvalid={touched.invoiceDue && errors.invoiceDue}
              />
              <Form.Control.Feedback type="invalid">
                {errors.invoiceDue}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="link" type="submit" disabled={isSubmitting} onClick={handlePrevious} className="ml-4">
              Back
            </Button>
            {' '}
            <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleNext}>
              Next - {step}
            </Button>
          </div>
          //ITEMS
          <Form.Group controlId="itemId" className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="itemId"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.itemId}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.itemId && errors.itemId}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemId}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="itemDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="itemDescription"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.itemDescription}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.itemDescription && errors.itemDescription}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemDescription}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="itemDescription" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="itemQuantity"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.itemQuantity}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.itemQuantity && errors.itemQuantity}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemQuantity}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="itemAmount" className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="itemAmount"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.itemAmount}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.itemAmount && errors.itemAmount}
            />
            <Form.Control.Feedback type="invalid">
              {errors.itemAmount}
            </Form.Control.Feedback>
          </Form.Group>

          //TOTALS
          <Form.Group controlId="subtotal" className="mb-3">
            <Form.Label>Subtotal</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="subtotal"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.subtotal}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.subtotal && errors.subtotal}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subtotal}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="taxRate" className="mb-3">
            <Form.Label>Tax Rate</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="taxRate"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.taxRate}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.taxRate && errors.taxRate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.taxRate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="tax" className="mb-3">
            <Form.Label>Tax</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="tax"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.tax}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.tax && errors.tax}
            />
            <Form.Control.Feedback type="invalid">
              {errors.tax}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="total" className="mb-3">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="total"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.total}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.tax && errors.total}
            />
            <Form.Control.Feedback type="invalid">
              {errors.total}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="paymentOptions" className="mb-3">
            <Form.Label>Payment Options</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="paymentOptions"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.paymentOptions}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.paymentOptions && errors.paymentOptions}
            />
            <Form.Control.Feedback type="invalid">
              {errors.paymentOptions}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="terms" className="mb-3">
            <Form.Label>Terms</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="total"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.paymentOptions}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              isInvalid={touched.paymentOptions && errors.paymentOptions}
            />
            <Form.Control.Feedback type="invalid">
              {errors.paymentOptions}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="link" type="submit" disabled={isSubmitting} onClick={handlePrevious} className="ml-4">
            Back
          </Button>
          {' '}
          <Button variant="primary" type="submit" disabled={isSubmitting} onClick={handleNext}>
            Next - {step}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
