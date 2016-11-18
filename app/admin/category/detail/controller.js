import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyRecord(model) {
      model.destroyRecord().then(() => {
        this.transitionToRoute('admin.category.index');
      });

    },
  },
});
