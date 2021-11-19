class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price,
    :created_at
  ) 


  belongs_to :user, key: :author
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
  end

  has_many :bids do
    object.bids.order(price: :DESC)
  end   
  class BidSerializer <ActiveModel::Serializer
    attributes :id, :price, :updated_at
  end
end
