import react, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function App() {
  const [unitPrice, setUnitPrice] = useState(148000);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(unitPrice);

  useEffect(() => {
    setTotalPrice(unitPrice * quantity);
  }, [unitPrice, quantity]);

  function decresingQuantity() {
    setQuantity(Math.max(1, quantity - 1));
  }

  function increasingQuantity() {
    setQuantity(1 + quantity);
  }

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View>
          <Image
            style={styles.imageProduct}
            source={require('./assets/book.png')}
          />
        </View>
        <View style={styles.productDetail}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
            Cung cấp bởi Tiki trading
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#eb322f' }}>
            {unitPrice}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 10,
              color: '#a1a1a1',
              textDecorationLine: 'line-through',
            }}>
            {unitPrice}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.quantityProductButton}
              onPress={decresingQuantity}>
              -
            </TouchableOpacity>
            <View
              style={{
                height: 15,
                width: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#cccccc',
              }}>
              <Text>{quantity}</Text>
            </View>

            <TouchableOpacity
              style={styles.quantityProductButton}
              onPress={increasingQuantity}>
              +
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 12,
          marginVertical: 24,
        }}>
        <TextInput
          style={{
            width: '60%',
            height: 35,
            padding: 12,
            fontWeight: 'bold',
            borderWidth: 1,
            borderColor: '#cccccc',
          }}
          placeholder="Nhập mã giảm giá"
        />
        <TouchableOpacity
          style={{
            width: 100,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: '#2186c4',
          }}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold', margin: 12 }}>
            {' '}
            Áp dụng
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>Tạm tính: </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold',color: '#E53935'}}>{totalPrice} đ</Text>
      </View>
      <View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#cccccc'}}>Thành tiền: </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold',color: '#E53935'}}>{totalPrice} đ</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#E53935',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: '#ffffff',
            }}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  productContainer: {
    flexDirection: 'row',
  },
  imageProduct: {
    width: 100,
    height: 100,
  },
  productDetail: {
    justifyContent: 'space-between',
  },
  quantityProductButton: {
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
});
