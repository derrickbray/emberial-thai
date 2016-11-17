import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
  saveForm(menuitem, price, description) {
    if (menuitem && price && description) {
      const menuitem = this.store.createRecord('menu-item', { menuitem, price, description });

      menuitem.save()
        .then(() => {
          alert('you did it');

          this.transitionToRoute('project.index');
        });
    } else {
      alert('fill it in');
    }
  },
},
});
