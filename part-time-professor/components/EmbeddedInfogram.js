import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function EmbeddedInfogram(props) {
  useEffect(function () {
    // eslint-disable-next-line no-unused-vars
    !(function (e, i, n, s) {
      var t = 'InfogramEmbeds',
        d = e.getElementsByTagName('script')[0];
      if (window[t] && window[t].initialized)
        window[t].process && window[t].process();
      else if (!e.getElementById(n)) {
        var o = e.createElement('script');
        (o.async = 1),
          (o.id = n),
          (o.src = 'https://e.infogram.com/js/dist/embed-loader-min.js'),
          d.parentNode.insertBefore(o, d);
      }
    })(document, 0, 'infogram-async');
  }, []);

  return (
    <div
      className="infogram-embed"
      data-id={props.chartId}
      data-type="interactive"
      data-title={props.title}
    />
  );
}

EmbeddedInfogram.propTypes = {
  chartId: PropTypes.string.isRequired,
  title: PropTypes.string,
};
