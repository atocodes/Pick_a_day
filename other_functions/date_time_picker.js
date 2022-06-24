function day_picker(f_day='እሮብ',t_day='እሁድ'){
    const days = [
        'ሰኞ',
        'ማክሰኞ',
        'እሮብ',
        'ሃሙስ',
        'አርብ',
        'ቅዳሜ',
        'እሁድ'
    ]

    
    let starting_index = days.indexOf(f_day)
    let ending_index = days.indexOf(t_day)
    
    if(starting_index > ending_index){
        let temp = starting_index
        starting_index = ending_index
        ending_index = temp

        let complex_loop = new Set()
        
        for(let i = starting_index; i < days.length; i++){
            complex_loop.add(days[i])
        }

        for(let i = 0; i <= ending_index; i++){
            complex_loop.add(days[i])
        }
        
        complex_loop = [...complex_loop]
        const random_day = Math.floor(Math.random() * complex_loop.length)
        const final_day = complex_loop[random_day]
        

        return {
            final_day : final_day,
            days: days
        }
    }
    
    const new_day_set = []
    for(let i = starting_index; i <= ending_index; i++){
        new_day_set.push(days[i])
    }
    

    const random_day = Math.floor(Math.random() * new_day_set.length)
    const final_day = new_day_set[random_day]
    return {
        final_day : final_day,
        days: days
    }
}
