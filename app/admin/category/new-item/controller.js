import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
  saveForm(formValues) {
    if (formValues) {
      const menuItem = this.store.createRecord('menu-item', { formValues });

      menuItem.save()
        .then(() => {
          alert('It Worked!');

          this.transitionToRoute('index');
        });
    } else {
      alert('It No Work!');
    }
  },
},
});
