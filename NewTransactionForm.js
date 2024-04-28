import React,{useState} from 'react'

function NewTransactionForm({onSubmission}) {
    const[formData,setFormData]= useState({
        date:"",
        description:"",
        category:"",
        amount:0,
    })
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)
        setFormData({
        date:"",
        description:"",
        category:"",
        amount:0,
        })
    }
    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <form onChange={handleChange} onSubmit={handleSubmit} id="new-item-form"className='form'>
        <div>
            <label htmlFor='date'>Date</label>
            <input value ={formData.date} name='date' type='date' id='date'/>
            <input value={formData.description} name='description' type='text' placeholder='Description...'/>
            <input value={formData.category} name='category' type='text' placeholder='Category...'/>
            <input value={formData.amount} name='amount' type='number'/>
        </div>
        <button>Add Transaction</button>
    </form>
  )
}

export default NewTransactionForm