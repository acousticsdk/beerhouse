import Categories from '../components/Categories'
import Sort, { list } from '../components/Sort'
import ProductBlock from '../components/ProductBlock'
import Skeleton from '../components/ProductBlock/Skeleton'
import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import qs from 'qs'
// import Pagination from '../components/Pagination'
// import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setFilter } from '../redux/slices/filterSlice'
import { setProducts, fetchProducts } from '../redux/slices/productsSlice'

function Home() {
    // const navigate = useNavigate()
    const items = useSelector((state) => state.products.items)
    const dispatch = useDispatch()

    const categoryId = useSelector((state) => state.filter.categoryId)
    const sort = useSelector((state) => state.filter.sort.sortProperty)

    const { searchValue } = useContext(AppContext)
    // const [items, setItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    // const isSearch = useRef(false)
    // const isMounted = useRef(false)
    // const [categoryId, setCategoryId] = useState(0)
    // const [sort, setSort] = useState({
    //     name: 'популярности',
    //     sortProperty: '-rating',
    // })

    // const [selectedPage, setSelectedPage] = useState(1)

    useEffect(() => {
        const getProducts = async () => {
            const order = sort.includes('-') ? 'desc' : 'asc'
            const sortBy = sort.replace('-', '')
            const category = categoryId > 0 ? `&category=${categoryId}` : ''
            const search =
                searchValue.length !== 0 ? `&search=${searchValue}` : ''
            try {
                dispatch(fetchProducts({ order, sortBy, category, search }))
                window.scrollTo(0, 0)
            } catch (error) {
                alert(error.message)
            } finally {
                setLoaded(true)
            }
        }
        setLoaded(false)

        getProducts()
    }, [categoryId, sort, searchValue])

    // useEffect(() => {
    //     const queryString = qs.stringify({
    //         categoryId,
    //     })
    //     navigate(`?${queryString}`)
    // }, [categoryId])

    const catChange = (id) => {
        dispatch(setCategoryId(id))
    }

    const products = items
        // .filter((obj) => {
        //     return obj.title.toLowerCase().includes(searchValue.toLowerCase())
        // })
        .map((item) => <ProductBlock {...item} key={item.id} />)

    const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories value={categoryId} onChangeCategory={catChange} />
                <Sort />
            </div>
            <h2 className='content__title'>Все виды пива</h2>
            <div className='content__items'>
                {loaded ? products : skeletons}
            </div>
            {/*<Pagination onChangePage={(number) => setSelectedPage(number)} />*/}
        </div>
    )
}

export default Home
