import React, {useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import {TableHeaderColumn} from 'react-bootstrap-table';
import './dataList.css';

function DataList(){
    const [userList, setUserList]= useState([]);

    const columns = [
        {dataField: 'id',text: 'Id'},
        {dataField: 'title',text: 'Title'},
        {dataField: 'price',text: 'Price', sort:true},
        {dataField: 'description',text: 'Description'},
        //filter products by category
        {dataField: 'category',text: 'Category', filter: textFilter()},
        //format of the data is image
        {
            dataField: 'image',
            text: 'img',
            formatter: (cell, row) => (
              <div>
                <img style={{width:80, height:80}} class="cover" src={cell}/>
              </div>
            )
          },
        //sorting by price and rating
        {dataField: 'rating.rate',text: 'Rating: rate', sort:true},
        {dataField: 'rating.count',text: 'Rating: count', sort:true}
    ]

    /*Retrieving  data via this API: https://fakestoreapi.com/products*/ 

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>setUserList(result))
        .catch(error=> console.log(error));
    },[])

    /*Display all products in a table, limiting 5 items per page. */
    const pagination= paginationFactory({
        //the page that will be displayed by default is the first one
        page: 1,
        sizePerPage: 5,
        alwaysShowAllBtns: true,
        showTotal: true,
        firstPageText: '<<',
        prePageText: '<',
        nextPageText: '>',
        lastPageText: '>>',
        onPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    return (<div className='DataList'>
        <BootstrapTable 
            bootstrap4 
            keyField='id' 
            data={ userList } 
            columns={ columns } 
            pagination={pagination} 
            filter={filterFactory()}>
        </BootstrapTable>
    </div>)
}

export default DataList;