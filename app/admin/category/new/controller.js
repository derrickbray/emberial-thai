import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      const category = this.store.createRecord('menu-category', formValues);

      category.save().then(() => {
        this.transitionToRoute('admin.category.index');
      });

    },
  },
});
