const subscriptions = {};

function subscribeToChanges({id, fn}) {
  subscriptions['id'] = fn;
}

function unsubscribeFromChanges({id}) {
  delete subscriptions['id'];
}

function fireEvent({type, payload}) {
  console.log(`#jeklfklwf event fired: `, {type, payload});
  Object.keys(subscriptions).forEach((id) => {
    if (typeof subscriptions[id] === 'function') {
      subscriptions[id]({type, payload});
    } else {
      console.error(`#rjkegj subscriptions[id] is not a function. `, subscriptions[id]);
    }
  });
}

export {
  fireEvent,
  subscribeToChanges,
  unsubscribeFromChanges,
};