const getQuotes = (req,res) => {
    res.status(200).json({message: 'get quotes'})
}

const createQuotes = (req,res) => {
    res.status(200).json({message: 'Create quotes'})
}

const updateQuotes = (req,res) => {
    res.status(200).json({message: 'Update quotes'})
}

const deleteQuotes = (req,res) => {
    res.status(200).json({message: 'Delete quotes'})
}
module.exports = {
    getQuotes,
    createQuotes,
    updateQuotes,
    deleteQuotes
}