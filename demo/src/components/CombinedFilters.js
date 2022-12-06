import React from 'react';

import { CombinedFacets } from '../../public/dist/js/main';
import { FacetItemComponent as TextFacetItemComponent } from './TextFilters';
import { FacetItemComponent as RangeFacetItemComponent } from './RangeFilters';
import { FacetItemComponent as MultilevelFacetItemComponent } from './MultilevelFilters';
import { scrollTop } from '../utils';

export const transform = function () {
    //process the facets
    return this;
};

const onFacetClick = (facetObj, eventType) => {
    console.log('Facet change :', facetObj, eventType);
    scrollTop();
    return true;
};

const CombinedFilters = () => {
    return (
        <CombinedFacets
            transform={transform}
            rangeFacetItemComponent={<RangeFacetItemComponent />}
            textFacetItemComponent={<TextFacetItemComponent />}
            collapsible
            enableViewMore
            searchable
            multilevelFacetItemComponent={<MultilevelFacetItemComponent />}
            minViewMore={3}
            applyMultiple={true}
            onFacetClick={onFacetClick}
        />
    );
};

export default CombinedFilters;
