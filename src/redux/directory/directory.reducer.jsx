const INITIAL_STATE = {
   sections: [
      {
         id: 1,
         title: 'کلاه',
         imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
         linkUrl: 'hats'
      },
      {
         id: 2,
         title: 'کاپشن',
         imageUrl: 'https://images.pexels.com/photos/7621778/pexels-photo-7621778.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
         linkUrl: 'jackets'
      },
      {
         id: 3,
         title: 'کتونی',
         imageUrl: 'https://images.pexels.com/photos/5205781/pexels-photo-5205781.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
         linkUrl: 'sneakers'
      },
      {
    id: 4,
         title: 'مردانه',
         imageUrl: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          size:'large',
         linkUrl: 'mens'
      },
      {
         id: 5,
         title: 'زنانه',
         imageUrl: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          size:'large',
         linkUrl: 'womens'
      },
   ]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      default: 
         return state;
   }
};

export default directoryReducer;